
interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Birthday Expense Planner</h1>
          <h2>BudgetEase Solutions</h2>
          <p>
            Welcome to BudgetEase Solutions, your trusted partner in planning memorable birthday celebrations. We understand that organizing a birthday event should be exciting, not stressful — and that's why we're here to help you budget with ease and confidence.
          </p>
          <p>
            Whether you're planning an intimate gathering or a grand celebration, our tools make it simple to estimate costs, explore options, and stay within budget — all while creating an unforgettable experience.
          </p>
          <button onClick={onStart} className="get-started-btn">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
