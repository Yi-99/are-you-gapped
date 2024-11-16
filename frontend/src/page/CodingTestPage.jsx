import DescriptionPanel from "../component/DescriptionPanel";
import QueryPanel from "../component/QueryPanel";
import ResultsTable from "../component/ResultsTable";
import Header from "../component/Header";

const CodingTestPage = () => {
    const [questionIndex, setQuestionIndex] = useState(1)
  return (
    <>
      <div className="min-h-screen">
      <Header/>
      <div className="flex flex-col lg:flex-row gap-4 p-6">
        <DescriptionPanel />
        <QueryPanel />
      </div>
      <ResultsTable />
    </div>
    </>
  );
};
export default CodingTestPage;
