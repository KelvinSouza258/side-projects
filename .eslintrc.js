module.exports = {
    root: true,
    extends: ['infojr-ts/next'],
    ignorePatterns: ['node_modules', 'dist', '**/*.js'],
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
}
