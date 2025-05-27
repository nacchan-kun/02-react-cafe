import { Votes } from '../../types/votes';
import styles from './VoteStats.module.css';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => (
  <div className={styles.container}>
    {Object.entries(votes).map(([key, value]) => (
      <p key={key} className={styles.stat}>
        {key.charAt(0).toUpperCase() + key.slice(1)}: <strong>{value}</strong>
      </p>
    ))}
    <p className={styles.stat}>
      Total: <strong>{totalVotes}</strong>
    </p>
    <p className={styles.stat}>
      Positive: <strong>{positiveRate}%</strong>
    </p>
  </div>
);

export default VoteStats;