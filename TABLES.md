**Table 1**

| Endpoint | Avg (ms) | 95th percentile (ms) | Throughput (req/s) | Error % |
|---|---|---|---|---|
| GET /api/transactions | 145 | 408 | 1.02 | 0.00% |
| GET /api/transactions/group/:groupId | 49 | 166 | 1.05 | 0.00% |
| GET /api/transactions/group/:groupId/balances | 48 | 169 | 1.05 | 0.00% |
| GET /api/transactions/balances | 41 | 59 | 1.05 | 0.00% |
| POST /api/transactions/group/:groupId | 132 | 271 | 1.05 | 0.00% |

**Table 2**

| Endpoint | Avg (ms) | 95th percentile (ms) | Throughput (req/s) | Error % |
|---|---|---|---|---|
| GET /api/transactions | 103 | 125 | 1.02 | 0.00% |
| GET /api/transactions/group/:groupId | 39 | 75 | 1.03 | 0.00% |
| GET /api/transactions/group/:groupId/balances | 37 | 48 | 1.03 | 0.00% |
| GET /api/transactions/balances | 36 | 62 | 1.03 | 0.00% |
| POST /api/transactions/group/:groupId | 130 | 168 | 1.03 | 0.00% |