export const InfoRow = ({ label, value }) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};
export const ProfileInformation = ({ ...allStates }) => {
  if (!allStates.formSubmitted) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }
  // eslint-disable-next-line no-unused-vars
  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        <InfoRow label="Email" value={allStates.email} />
        <InfoRow label="First Name" value={allStates.firstName} />
        <InfoRow label="Last Name" value={allStates.lastName} />
        <InfoRow label="City" value={allStates.city} />
        {/* You will need to format the string "nnnnnnn" as "nn-nn-nn-n" */}
        <InfoRow label="Phone" value={allStates.telephoneNumber} />
      </div>
    </>
  );
};
