import { nanoid } from "nanoid";
import DailyLoanForm from "../../components/forms/DailyLoanForm";
import Layout from "../../components/layout/Layout";
import AllDailyLoansTable from "../../components/tables/AllDailyLoansTable";


export default function DailyLoansSection({dailyLoans}) {
  console.log(dailyLoans)
  return (
    <Layout>
      <main className="is-flex is-align-items-center is-justify-content-center">
        <AllDailyLoansTable dailyLoans={dailyLoans} />

      </main>
    </Layout>
  );
}

export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/loans');
  const dailyLoans = await res.json();

  return {
    props: {dailyLoans}
  }

}
