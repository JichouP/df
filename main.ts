#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import argv from 'argv';

// define reg
const reg = [/ *\[[^\[\]]*\] */g, / *\([^\(\)]*\) */g];

// get args
const args = argv.run();

// rename
if (args.targets.length) {
    for (const targetDir of args.targets) {
        for (const name of fs.readdirSync(path.resolve(targetDir))) {
            fs.renameSync(path.resolve(targetDir, name), path.resolve(targetDir, name.replace(reg[0], '').replace(reg[1], '')));
        }
    }
} else if (typeof process.env.PWD === 'string') {
    // if there is no target
    const targetDir = process.env.PWD;
    for (const name of fs.readdirSync(path.resolve(targetDir))) {
        fs.renameSync(path.resolve(targetDir, name), path.resolve(targetDir, name.replace(reg[0], '').replace(reg[1], '')));
    }
}
