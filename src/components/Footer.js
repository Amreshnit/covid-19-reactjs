import {API_DOMAIN} from '../constants';

import {memo} from 'react';
import {Twitter, GitHub, Instagram, Database, Mail, Send} from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="https://github.com/covid19india"
          target="_blank"
          rel="noopener noreferrer"
        >
          covid19india
        </a>
      </div>

      <h5>{t('We stand with everyone fighting on the frontlines')}</h5>

      <div className="links">
        <a
          href="https://github.com/Amreshnit"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          className="api"
          href={API_DOMAIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database />
        </a>

        <a
          href="https://t.me/covid19indiaorg"
          className="telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a>

        <a
          href="https://twitter.com/kumaramresh594"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <Twitter />
        </a>

        <a
          href="https://www.instagram.com/its_amresanu/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <Instagram />
        </a>

        <a
          href="mailto:amresh09mcaproject@gmail.com"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
