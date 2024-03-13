
export const SearchBox = ({ handleFilterChange  }) => {
  return (
    <div>
      <h2>Search Contacts</h2>
      <input type="text" placeholder="Search by name" onChange={handleFilterChange} />
    </div>
  );

}