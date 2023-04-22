import Ad from './Ad'
import Top from './Top'
import Main from './Main'
import styles from './styles.module.scss'

const Header = ({country}) => {
  return (
    <header>
      <Ad></Ad>
      <Top country={country}></Top>
      <Main></Main>
    </header>
  )
}

export default Header