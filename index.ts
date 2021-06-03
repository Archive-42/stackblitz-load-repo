import sdk from '@stackblitz/sdk';
import './styles.css';

// https://github.com/bgoonz/BGOONZ_BLOG_2.0
window['openGithubProject'] = () => {
  sdk.openGithubProject('bgoonz/BGOONZ_BLOG_2.0');
}

// Embed the RealWorld Angular repo on this page
window['embedGithubProject'] = () => {
  sdk.embedGithubProject(
    'myDiv',
    'bgoonz/BGOONZ_BLOG_2.0',
    { height: 700 }
  );
}