import styles from "./Steel.module.css";
import React, {Component} from 'react';
import Coil from 'coil';

class Steel extends Component {
  render() {
    return <div className={styles.steel}>This is a Steel. It makes using <Coil/></div>;
  }
}

export default Steel;

