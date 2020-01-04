import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="page-footer mt-4">
      <div className="copyright text-center bg-dark text-white py-4">
        Copyright &copy; {new Date().getFullYear()} Bharat Middha
      </div>
    </footer>
  );
};

export default Footer;
