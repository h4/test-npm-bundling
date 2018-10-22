import styles from './Truck.module.css';
import React, {Component} from 'react';
import Steel from 'steel';

class Truck extends Component {
  render() {
    return <div className={styles.truck}>This is a Truck. It makes using <Steel/></div>;
  }
}

export default Truck;

