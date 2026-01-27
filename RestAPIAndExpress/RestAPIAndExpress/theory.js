/* 
key principle:
-staeless: independent, self  contained accries aheaders with every req independent
-client server architecture: oe system connect with another , cline is the one we initiate and servefr is the one who response.
-uniform interface: set of guidelines
-resource oriented: identify the knowns of the system, ex user mangement system so user could enoight, api should be structurs like that

Api architecture: focuses on the design and organization of AI systems, including data management, model training, and deployment strategies.
Rest api architecture: is a subset of api architecture that specifically deals with the design and implementation of RESTful APIs.
-Rest api req and respnse structure: defines how requests are made to the API and how responses are returned, typically using JSON format.
Api status codes:
1xx:infomtion
2xx: succesfull
3xx:redirection
4xx:clinet side error: i build an api in api i need the certain keys,
5xx:server side like inetrnally radis faling postgress failing winside the server

Restfull endpoint:
http://localhost/restfulservice/v1/users/{id}
restfulservice-application context 
v1 version:y we have: any breaking changes
users - resourse:
{id}-

*/