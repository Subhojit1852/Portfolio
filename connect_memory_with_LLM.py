import os
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain.chains.llm import LLMChain
import certifi
os.environ['SSL_CERT_FILE'] = certifi.where()

# Load the .env file
load_dotenv()

# Set the OpenRouter API key and endpoint
os.environ["OPENAI_API_KEY"] = os.getenv("OPENROUTER_API_KEY")
os.environ["OPENAI_BASE_URL"] = "https://openrouter.ai/api/v1"

# Prompt template
prompt = PromptTemplate(
    input_variables=["question"],
    template="Answer the following question as clearly and briefly as possible:\n\nQuestion: {question}\n\nAnswer:"
)

# Load the LLM via OpenRouter (you can try others like openai/gpt-3.5-turbo)
llm = ChatOpenAI(
    model="mistralai/mistral-7b-instruct",  # or try "meta-llama/Meta-Llama-3-8B-Instruct"
    temperature=0.3
)

# Create the chain
chain = LLMChain(llm=llm, prompt=prompt)

# Run from terminal
if __name__ == "__main__":
    query = input("Ask a question: ")
    response = chain.run(query)
    print("\n🤖 Answer:", response)
