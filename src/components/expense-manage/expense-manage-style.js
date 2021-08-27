import styled from "styled-components";

export const ExpenseManagementHeader = styled.div`
  height: 75px;
  padding: 20px;
  background-color: #6e48aa;
  color: white;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

export const AccountBalance = styled.div`
  text-align: center;
  width: 75%;
  align-content: space-between;
  display: block;
  margin: 15px auto;
  box-shadow: 0px 0px 10px #6e48aa;
  border-radius: 10px;
  font-weight: bold;
`;

export const AccountBalanceTitle = styled.div`
  font-size: 17px;
`;

export const AccountBalanceAmount = styled.div`
  font-size: 20px;
  margin-left: -10px;
`;

export const Insights = styled.div`
  min-height: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  border: 1px solid #6e48aa;
  box-shadow: 0px 0px 10px #6e48aa;
  border-radius: 10px;
  width: 80%;
  display: grid;
  margin: 15px auto;
`;

export const ButtonLink = styled.div`
  text-align: center;
  width: 75%;
  margin: 15px auto;
  font-weight: bold;
  font-size: 16px;
  background-color: #6e48aa;
  border-radius: 10px;
  height: 40px;
  padding: 5px;
`;

export const TransactionPoliciesContainer = styled.div`
  border: 1px solid;
  margin: 10px auto 80px;
  padding: 15px;
  border: 1px solid #6e48aa;
  box-shadow: 0px 0px 10px #6e48aa;
  border-radius: 10px;
  width: 80%;
`;

export const TransactionPolicy = styled.div`
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #6e48aa;
  box-shadow: 0px 0px 1px #6e48aa;
  border-radius: 7px;
`;

export const TransactionPolicyTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  width: 70%;
  color: #6e48aa;
  display: inline-block;
`;
