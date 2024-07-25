import { db } from "@/db";
import { eq } from "drizzle-orm";
import { quizzes } from "@/db/schema";
import { auth } from "@/auth";
import QuizzesTable, { Quiz } from "./quizzesTable";
import getUserMetrics from "@/app/actions/getUserMetrics";
import MetricCard from "./metricCard";

const page = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return <p>User not found</p>;
  }

  const userQuizzes: Quiz[] = await db.query.quizzes.findMany({
    where: eq(quizzes.userId, userId),
  });

  const userData = await getUserMetrics();
  console.log(userData);

  return (
    <>
    <div className="mt-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {userData && userData.length > 0
          ? userData.map((metric) => (
              <MetricCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
              />
            ))
          : null}
      </div>
      <QuizzesTable quizzes={userQuizzes} />
    </>
  );
};

export default page;
