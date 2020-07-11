//
// With credits to https://github.com/eugeneware/ffmpeg-static
//
var os = require('os');
var path = require('path');

// Key - supported OS platforms
// Object - array of supported architectures
const supported = {
  darwin: ['x64'],
  linux: ['arm', 'arm64', 'ia32', 'x64'],
  win32: ['ia32', 'x64']
}

var platform = os.platform();

if(!(platform in supported)) {
  console.error('Unsupported platform:', platform);
  process.exit(1);
}

var arch = os.arch();

if(supported[platform].indexOf(arch) < 0) {
  console.error('Unsupported architecture:', arch);
  process.exit(1);
}

var ffprobePath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win32' ? 'ffprobe.exe' : 'ffprobe'
);

exports.path = ffprobePath;
