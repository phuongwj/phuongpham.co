# API Endpoints

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

# JMeter

**Table X+2**

| Endpoint | Avg (ms) | 95th percentile (ms) | Throughput (req/s) | Error % |
|---|---|---|---|---|
| GET /api/groups (control) | 188 | 269 | 1.02 | 0.00% |
| GET /api/groups/:id (control) | 139 | 235 | 1.02 | 0.00% |
| GET /api/transactions/balances | 147 | 226 | 1.02 | 0.00% |
| GET /api/transactions/group/:groupId/balances | 156 | 276 | 1.02 | 0.00% |
| POST /api/auth/login (control) | 480 | 792 | 1.02 | 0.00% |

**Table X+3: JMeter results after parallelizing the balance endpoint queries**

| Endpoint | Avg (ms) | 95th percentile (ms) | Throughput (req/s) | Error % |
|---|---|---|---|---|
| GET /api/groups (control) | 211 | 331 | 1.02 | 0.00% |
| GET /api/groups/:id (control) | 146 | 279 | 1.02 | 0.00% |
| GET /api/transactions/balances | 153 | 281 | 1.02 | 0.00% |
| GET /api/transactions/group/:groupId/balances | 162 | 288 | 1.02 | 0.00% |
| POST /api/auth/login (control) | 480 | 866 | 1.02 | 0.00% |