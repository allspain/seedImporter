
import { postGQLQuery } from './apiWrapper';

const importMutation = `mutation UpdatePhaseSeeding ($phaseId: ID!, $seedMapping: [UpdatePhaseSeedInfo]!) {
  updatePhaseSeeding (phaseId: $phaseId, seedMapping: $seedMapping) {
    id
  }
}`;

function importedPhaseHandler(response) {
  console.log(response);
  debugger;
}


export function importPhaseSeeding(file) {
  const { content, phase } = file;

  const seedMapping = content.map(seedArr => ({
    seedId: seedArr['Seed ID'],
    seedNum: seedArr['Phase Seed']
  }));

  const variables = {
    phaseId: phase.id,
    seedMapping
  };
  return postGQLQuery(importMutation, 'UpdatePhaseSeeding', variables).then(importedPhaseHandler);
}
