**README for Daily Volatility Microservice**

## Introduction

The Daily Volatility Microservice calculates the daily volatility of a specific stock ticker based on the last 30 closing prices. It uses Alpha Vantage API to fetch historical stock prices.

### Endpoints

- **GET /volatility** - Calculate the daily volatility for a given stock ticker.

## How to Programmatically REQUEST Data

You can programmatically request data from the Daily Volatility Microservice by making a GET request with the stock ticker as a parameter.

### Example Call:
Assuming microservice is deployed:
http://localhost:3000/volatility?ticker=DDOG

## How to Programmatically RECEIVE Data

The Daily Volatility Microservice will respond with a JSON object containing the stock ticker and its daily volatility.


## UML Sequence Diagram

Below is a UML sequence diagram of how requesting/receiving the data works:

```
User                          DailyVolatility Microservice                 Database of closing prices
  |                                        |                                   |
  |-----RequestVolatility(ticker)------->  |                                   |
  |                                        |---RetrieveData(ticker)----------> |
  |                                        |<---ReturnData(volatilityData)---  |
  |<---ReturnVolatility(volatilityData)--- |                                   |
  |                                        |                                   |

```

In the diagram:
1. The "Client" sends a GET request to the microservice with the specific stock ticker as a parameter.
2. The microservice calculates the daily volatility based on the stock ticker using the Alpha Vantage API.
3. The microservice responds with a JSON object containing the stock ticker and its corresponding daily volatility to the client.
