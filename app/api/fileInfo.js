
import { getGQLQuery } from './apiWrapper';

const seedQuery = `query getSeedInfoById($seedId:ID!){
  seed(id:$seedId){
    id
    seedNum
    phase {
      id
      name
    }
    entrant {
      event {
        id
        name
        tournament {
          id
          name
        }
      }
    }
  }
}`;

function getCompetitiveInfoForSeedHandler(response) {
  const { data } = response;
  const { phase } = data.seed;
  const { event } = data.seed.entrant;
  const { tournament } = event;

  return {
    tournament,
    event,
    phase
  };
}

function getCompetitiveInfoForSeed(seedId) {
  return getGQLQuery(seedQuery, 'getSeedInfoById', { seedId }).then(getCompetitiveInfoForSeedHandler);
}


export function getFileInfo(file) {
  const { content } = file;
  const currentSeedId = content[0]['Seed ID']; // make this dynamic with fallbacks for failures
  return getCompetitiveInfoForSeed(currentSeedId);
}
