import './BreadCrumbs.css';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CATALOGUE_PAGE } from '../../config/links';

const Separator = styled.span`
  color: #dc8962;
`;

function BreadCrumbs() {
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    bread__crumb: {
      color: '#DC8962',
      textDecoration: 'underline',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      cursor: 'pointer',
    },
  }));
  const classes = useStyles();

  return (
    <Breadcrumbs className='bread' separator={<Separator>&gt;</Separator>} aria-label='breadcrumb'>
      <Link className={classes.bread__crumb} onClick={() => history.push('/')}>
        Главная
      </Link>
      <Link className={classes.bread__crumb} onClick={() => history.push(`${CATALOGUE_PAGE}`)}>
        В каталог
      </Link>
    </Breadcrumbs>
  );
}

export default BreadCrumbs;
