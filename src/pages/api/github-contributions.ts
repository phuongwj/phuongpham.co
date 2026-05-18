export const prerender = false;

import { getSecret } from "../../lib/env";

export async function GET() {
  const token = getSecret("GITHUB_TOKEN");
  const username = getSecret("GITHUB_USERNAME");

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
