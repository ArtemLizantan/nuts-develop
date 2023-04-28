import { spawn } from 'child_process';
import { plugins } from '../config/plugins.js';
import { path } from '../config/path.js';

export function strapi(cb) {
  const strapiProcess = spawn('strapi', ['develop'], { stdio: 'inherit', cwd: path.src.root });

  strapiProcess.on('exit', (code, signal) => {
    if (code === null) {
      plugins.util.log(plugins.util.colors.red('Error running Strapi'));
      return cb();
    }

    plugins.util.log(plugins.util.colors.blue(`Strapi has been stopped with code ${code}`));
    cb();
  });
}

strapi.description = 'Starts Strapi';