export const prerender = false;

export async function GET({ locals }: { locals: App.Locals }) {
  const token = locals.runtime.env.GITHUB_TOKEN;
  const username = locals.runtime.env.GITHUB_USERNAME;

  if (!token || !username) {
    return Response.json({ weeks: [], totalContributions: 0 });
  }
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "phuong-dev",
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });
  if (!response.ok) {
    return Response.json({ weeks: [], totalContributions: 0 });
  }
  const json = await response.json() as any;
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    return Response.json({ weeks: [], totalContributions: 0 });
  }
  return Response.json({
    weeks: calendar.weeks.slice(-34),
    totalContributions: calendar.totalContributions,
  });
}