const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1 className="text-7xl">User number {id}</h1>
    </div>
  );
};

export default page;
