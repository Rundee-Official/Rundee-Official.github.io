import './BigMoth2.css';

export default function BigMoth2() {
  return (
    <div className="project-detail">
      <h2>Big Moth 2</h2>
      <img src="/images/big-moth-2.png" alt="Big Moth 2" className="detail-image" />
      <p>
        <strong>Role:</strong> UI/UX & Gameplay Programmer
      </p>
      <p>
        Big Moth 2 is a whimsical game where players catch and interact with moths in a stylized world.
        I focused on implementing intuitive UI elements and responsive gameplay mechanics using Unity and C#.
      </p>
      <ul>
        <li>🔹 Built FSM-based moth AI for believable behavior</li>
        <li>🔹 Designed responsive UI with animated transitions</li>
        <li>🔹 Implemented interaction systems (catching, befriending)</li>
        <li>🔹 Tuned player movement & camera for fluid gameplay</li>
      </ul>
      <a
        className="github-link"
        href="https://github.com/Rundee-Official/big-moth-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗 View on GitHub
      </a>
    </div>
  );
}
