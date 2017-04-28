#!/usr/bin/env node

const findParentDir = require('find-parent-dir');

const DEFAULT = '.git';

const file =  process.argv[2] || DEFAULT;

findParentDir(process.cwd(), file, (err, dir) => {
    if (err) {
        console.error('Error:', err);
    } else {
	    console.log('Found:', dir);
    }
});
