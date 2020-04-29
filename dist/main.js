#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const argv_1 = __importDefault(require("argv"));
// define reg
const reg = [/ *\[[^\[\]]*\] */g, / *\([^\(\)]*\) */g];
// get args
const args = argv_1.default.run();
// rename
if (args.targets.length) {
    for (const targetDir of args.targets) {
        for (const name of fs_1.default.readdirSync(path_1.default.resolve(targetDir))) {
            fs_1.default.renameSync(path_1.default.resolve(targetDir, name), path_1.default.resolve(targetDir, name.replace(reg[0], '').replace(reg[1], '')));
        }
    }
}
