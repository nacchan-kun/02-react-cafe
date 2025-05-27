import { VoteType } from '../../types/votes';
import styles from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => (
  <div className={styles.container}>
    {(['good', 'neutral', 'bad'] as VoteType[]).map(type => (
      <button key={type} className={styles.button} onClick={() => onVote(type)}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    ))}
    {canReset && (
      <button className={`${styles.button} ${styles.reset}`} onClick={onReset}>
        Reset
      </button>
    )}
  </div>
);

export default VoteOptions;