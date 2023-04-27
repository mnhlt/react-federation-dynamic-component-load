var fs = require('fs');
var resolve = require('path').resolve;
var join = require('path').join;
var cp = require('child_process');
var os = require('os');

// get library path

var root = resolve(__dirname, '.');

// npm binary based on OS

var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

fs.readdirSync(root).forEach(function (subDir) {
  var subDirPath = join(root, subDir);

  // ensure path has package.json --> skip backend folder

  if (!fs.existsSync(join(subDirPath, 'package.json'))) return;

  console.log('===================================================================');
  console.log(`Performing "npm ci" inside ${subDir} folder`);
  console.log('===================================================================');

  // install dependencies

  cp.spawnSync(npmCmd, ['ci'], { env: process.env, cwd: subDirPath, stdio: 'inherit' });
  cp.spawnSync('cp', ['-R', `${root}/platform`, `${subDirPath}/src`], { env: process.env, cwd: subDirPath, stdio: 'inherit' });
});

// Running the apps

console.log('===================================================================');
console.log(`Starting the apps`);
console.log('===================================================================');




var remote2 = resolve(__dirname, './2-remote');

cp.spawn(npmCmd, ['run', 'dev'], { env: process.env, cwd: remote2, stdio: 'inherit' });

var remote3 = resolve(__dirname, './3-remote');

cp.spawn(npmCmd, ['run', 'dev'], { env: process.env, cwd: remote3, stdio: 'inherit' });

var hostAppPath = resolve(__dirname, './1-host');

cp.spawn(npmCmd, ['run', 'dev'], { env: process.env, cwd: hostAppPath, stdio: 'inherit' });
