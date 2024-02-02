import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
    let millseconds = parseInt((time % 1000) / 100);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    return (
      <p className={styles.formattedTime}>
        {hours}:{minutes}:{seconds}.{millseconds}
      </p>
   );
 
 };
 
 export default FormattedTime;