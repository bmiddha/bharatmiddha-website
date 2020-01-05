import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons';

export const Footer: FC = () => {
  return (
    <footer className="page-footer mt-4">
      <div className="copyright text-center bg-dark text-white py-4">
        <p>
          <FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} /> |{' '}
          <a
            href="https://github.com/bmiddha/bharatmiddha-website"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> bmiddha/bharatmiddha-website
          </a>
        </p>
        <p>Copyright &copy; {new Date().getFullYear()} Bharat Middha</p>
      </div>
    </footer>
  );
};

export default Footer;
