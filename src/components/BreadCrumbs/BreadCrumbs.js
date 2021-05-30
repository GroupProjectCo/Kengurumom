import './BreadCrumbs.css'

import {makeStyles} from '@material-ui/core/styles'
import {pathTranslate as translate} from "../../config/links";
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {useHistory, useLocation} from 'react-router-dom';
import styled from 'styled-components';

const Separator = styled.span`color: #DC8962`;

function BreadCrumbs() {
  const {pathname} = useLocation();
  const history = useHistory()
  const pathNames = pathname.split('/').filter(x => x)

  const useStyles = makeStyles((theme) => ({
    bread__crumb: {
      color: "#DC8962",
      textDecoration: "underline",
      fontSize: "inherit",
      lineHeight: "inherit",
      cursor: "pointer"
    },
  }));
  const classes = useStyles()

  return (
      <Breadcrumbs className='bread' separator={<Separator>&gt;</Separator>} aria-label="breadcrumb">
        <Link className={classes.bread__crumb} onClick={() => history.push('/')}>Главная</Link>
        {pathNames.map((name, index) => {
          const pathBack = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          return isLast ? (<Typography key={index} className={classes.bread__crumb}>{translate[name] || name}</Typography>)
            : (<Link key={index} className={classes.bread__crumb} onClick={() => history.push(pathBack)}>{translate[name] || name}</Link>)
        })}
      </Breadcrumbs>
  )
}

export default BreadCrumbs