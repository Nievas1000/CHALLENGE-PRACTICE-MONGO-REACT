export const NoDataCard = () => {
  return (
    <div className="error-card">
      <div className="error-card-body">
        <h5 className="error-title">No Data Found</h5>
        <p className="error-message">Please upload a CSV file.</p>
      </div>
    </div>
  );
};
