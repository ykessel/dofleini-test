import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation } from "react-router-dom";


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  const { pathname } = useLocation();
  const path = pathname.substring(1);
  const currentRoute = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Inicio
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="#"
        >
          Admin
        </Link>
        <Link
          underline="hover"
          color="primary"
          href="#"
        >
          { currentRoute }
        </Link>
      </Breadcrumbs>
    </div>
  );
}