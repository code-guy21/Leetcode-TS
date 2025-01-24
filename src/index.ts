import inquirer from 'inquirer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getCategories = (): { name: string; value: string }[] => {
	const srcPath = path.join(__dirname, '../src/tests');
	try {
		const files = fs
			.readdirSync(srcPath, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => ({
				name: dirent.name
					.split('')
					.map((l, i) => (i === 0 ? l.toUpperCase() : l))
					.join(''),
				value: dirent.name,
			}));
		return files.concat([
			{ name: 'Run All', value: 'all' },
			{ name: 'Exit', value: 'exit' },
		]);
	} catch (error) {
		console.error('Error reading categories:', error);
		process.exit(1);
	}
};

const getTestOptions = (
	category: string
): { name: string; value: string }[] => {
	const categoryPath = path.join(__dirname, '../src/tests', category);
	try {
		const files = fs
			.readdirSync(categoryPath, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => ({
				name: dirent.name
					.split(/(?=[A-Z])/)
					.map(w =>
						w
							.split('')
							.map((l, i) => (i === 0 ? l.toUpperCase() : l))
							.join('')
					)
					.join(' '),
				value: dirent.name,
			}));

		return files.concat([{ name: 'Run All', value: 'all' }]);
	} catch (error) {
		console.error(
			`Error reading test files for category "${category}":`,
			error
		);
		process.exit(1);
	}
};

const initCli = async () => {
	try {
		const categories = getCategories();

		let { category } = await inquirer.prompt([
			{
				type: 'list',
				name: 'category',
				message: 'select a category for tests',
				choices: categories,
			},
		]);

		handleCategory(category);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const handleCategory = (category: string) => {
	switch (category) {
		case 'all':
			runTests('all', 'all');
			break;
		case 'exit':
			process.exit(1);
		default:
			handleOptions(category);
	}
};

const handleOptions = async (category: string) => {
	try {
		let testOptions = getTestOptions(category);
		let { option } = await inquirer.prompt([
			{
				type: 'list',
				name: 'option',
				message: 'select which tests to run',
				choices: testOptions,
			},
		]);

		runTests(category, option);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const runTests = (category: string, option: string) => {
	const jestProcess = spawn(
		'npx',
		[
			'jest',
			'--verbose',
			`src/tests/${category === 'all' ? '' : category}${
				option === 'all' ? '' : `/${option}`
			}`,
		],
		{
			stdio: 'inherit',
		}
	);

	jestProcess.on('close', code => {
		if (code === 0) {
			console.log('\n✅ Tests completed successfully.');
		} else {
			console.error('\n❌ Tests failed.');
		}

		initCli();
	});
};

initCli();
