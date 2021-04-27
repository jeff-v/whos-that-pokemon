interface NameAndURL {
  name: string;
  url: string;
}

interface Ability {
  ability: NameAndURL;
  is_hidden: boolean;
  slot: number;
}

interface GameIndex {
  game_index: number;
  version: NameAndURL;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NameAndURL;
  version_group: NameAndURL;
}

interface Move {
  move: NameAndURL;
  version_group_details: VersionGroupDetail[];
}

interface FrontSprite {
  front_default: string;
}

interface DefaultSprites extends FrontSprite {
  back_default: string;
}

interface DefaultSpritesAndShinies extends DefaultSprites {
  front_shiny: string;
  back_shiny: string;
}

interface DefaultSpritesAndShiniesAndGendered extends DefaultSpritesAndShinies {
  back_female?: string;
  front_female?: string;
  front_shiny_female?: string;
}

interface DefaultSpritesAndShiniesAndGenderedAndAnimated
  extends DefaultSpritesAndShiniesAndGendered {
  animated: DefaultSpritesAndShiniesAndGendered;
}

interface GraySprites extends DefaultSprites {
  back_gray: string;
  front_gray: string;
}

interface Fronts {
  front_default: string;
  front_shiny: string;
}

interface FemaleAndShiny {
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

interface GenerationOne {
  'red-blue': GraySprites;
  yellow: GraySprites;
}

interface GenerationTwo {
  crystal: DefaultSpritesAndShinies;
  gold: DefaultSpritesAndShinies;
  silver: DefaultSpritesAndShinies;
}

interface GenerationThree {
  emerald: Fronts;
  'firered-leafgreen': DefaultSpritesAndShinies;
  'ruby-sapphire': DefaultSpritesAndShinies;
}

interface GenerationFour {
  'diamond-pearl': DefaultSpritesAndShiniesAndGendered;
  'heartgold-soulsilver': DefaultSpritesAndShiniesAndGendered;
  platinum: DefaultSpritesAndShiniesAndGendered;
}

interface GenerationFive {
  'black-white': DefaultSpritesAndShiniesAndGenderedAndAnimated;
}

interface GenerationSix {
  'omegaruby-alphasapphire': FemaleAndShiny;
  'x-y': FemaleAndShiny;
}

interface Versions {
  'generation-i'?: GenerationOne;
  'generation-ii'?: GenerationTwo;
  'generation-iii'?: GenerationThree;
  'generation-iv'?: GenerationFour;
  'generation-v'?: GenerationFive;
  'generation-vi'?: GenerationSix;
}

interface Sprite {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
  other: {
    dream_world: {
      front_default: string;
      front_female?: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
  versions: Versions;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: NameAndURL;
}

interface SlotAndType {
  slot: number;
  type: NameAndURL;
}

interface PastType {
  generation: NameAndURL;
  types: SlotAndType[];
}

interface HeldItem {
  item: NameAndURL;
  version_details: NameAndURL[];
}

export default interface PokemonEntry {
  abilities: Ability[];
  baseExperience: number;
  forms: NameAndURL[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: PastType[];
  species: NameAndURL;
  sprites: Sprite;
  stats: Stats[];
  types: SlotAndType[];
  weight: number;
}
