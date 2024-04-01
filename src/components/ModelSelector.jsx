import React from "react";

const ModelSelector = ({ selectedModel, setSelectedModel }) => {
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <select value={selectedModel} onChange={handleModelChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      <option value="">Choose a model</option>
      <option value="bert-base-uncased">BERT Base Uncased</option>
      <option value="roberta-base">RoBERTa Base</option>
      <option value="distilbert-base-uncased">DistilBERT Base Uncased</option>
    </select>
  );
};

export default ModelSelector;
