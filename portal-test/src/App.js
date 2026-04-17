function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src="https://test-dashboard.paisasmart.com/"
        // src="http://localhost:3000/"

        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
        title="Portal"
      />
    </div>
  );
}

export default App;