/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
	preset: 'ts-jest',
	TestEnvironment: 'node',
	testPathIgnorePatterns: ['dist'],
	resolver: 'jest-ts-webcompat-resolver',
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
};
