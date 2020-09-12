// Array of potting mix ratio data with its conductivity level when dry and moist
let potting_mix_ratio_data = [
  ["1:0:0",442,277],
  ["4:1:0",618,283],
  ["4:0:1",562,280],
  ["3:2:0",625,301],
  ["3:1:1",588,305],
  ["3:0:2",599,255],
  ["2:3:0",673,345],
  ["2:2:1",638,314],
  ["2:1:2",654,304],
  ["2:0:3",674,318],
  ["1:4:0",680,342],
  ["1:3:1",678,309],
  ["1:2:2",666,323],
  ["1:1:3",659,441],
  ["1:0:4",655,344],
  ["0:1:0",682,337],
  ["0:4:1",681,318],
  ["0:3:2",681,312],
  ["0:2:3",682,305],
  ["0:1:4",681,296],
  ["0:0:1",681,300]
];

// Array of plant names data
let plant_name_data = [
  ["African Violet, Sainpaulia ionantha"],
  ["Air Plant, Tillandsia"],
  ["Aloe vera, Aloe barbadensis"],
  ["Amaryllis, Hippeastrum"],
  ["Anthurium, Anthurium"],
  ["Aralia, Polyscias fruticosa"],
  ["Arrowhead Vine, Syngonium podophyllum"],
  ["Asparagus Fern, Asparagus setaceus"],
  ["Azalea, Rhododendron"],
  ["Bamboo Plant, Bambusoideae"],
  ["Baby's Tears, Soleirolia soleirolii"],
  ["Bay Tree, Laurus nobilis"],
  ["Begonia Rex, Begonia rex"],
  ["Begonia, Begonia"],
  ["Bird of Paradise, Strelitzia reginae"],
  ["Billbergia, Billbergia"],
  ["Bizzy Lizzy, Impatiens Wallerinia"],
  ["Black-eyed Susan, Rudbeckia hirta"],
  ["Bloodleaf, Iresine herbstii"],
  ["Blue African Lily, Agapanthus praecox"],
  ["Boston Fern, Nephrolepis exaltata"],
  ["Bottlebrush Plant, R. Br"],
  ["Bougainvillea, Bougainvillea"],
  ["Browailia, Browallia"],
  ["Buddhist Pine, Podocarpus macrophyllus"],
  ["Burro's Tail, Sedum morganianum"],
  ["Buxus, Buxus"],
  ["Butterfly Flower, Asclepias syriaca"],
  ["Caladium, Caladium"],
  ["Calceolaria, Calceolaria"],
  ["Calla Lily, Zantedeschia"],
  ["Camellia, Camellia"],
  ["Cape cowslip, Lachenalia viridiflora"],
  ["Cape Ivy, Delairea odorata"],
  ["Cardinal Flower, Lobelia cardinalis"],
  ["Cast Iron Plant, Aspidistra elatior"],
  ["Castor Oil Plant, Ricinus communis"],
  ["Century Plant, Agave americana"],
  ["Ceropegia, Ceropegia"],
  ["Chenille Plant, Acalypha hispida"],
  ["Chinese Evergreen, Aglaonema"],
  ["Christmas Cactus, Schlumbergera"],
  ["Christmas Pepper, Capsicum annuum"],
  ["Chrysanthemum, Chrysanthemum"],
  ["Cineraria, Cineraria"],
  ["Citrus, Citrus"],
  ["Clerodendrum, Clerodendrum"],
  ["Coffee Plant, Coffea"],
  ["Coleus, Plectranthus scutellarioides"],
  ["Columnea, Columnea"],
  ["Copperleaf, Acalypha wilkesiana"],
  ["Coral Berry, Ardisia crenata"],
  ["Corn Plant, Dracaena fragrans"],
  ["Creeping Moss,  "],
  ["Crossandra, Crossandra"],
  ["Croton, Codiaeum variegatum"],
  ["Crown of Thorns, Euphorbia milii"],
  ["Cryptanthus,  "],
  ["Cupid's Bower, Achimenes longiflora"],
  ["Cyclamen, Cyclamen"],
  ["Devil's Ivy, Epipremnum aureum"],
  ["Dipladenia, Dipladenia"],
  ["Dracaena (all), Dracaena"],
  ["Dumb Cane, Dieffenbachia"],
  ["Easter Lily, Lilium longiflorum"],
  ["Echeveria, Echeveria"],
  ["Egyptian Star Cluster, Pentas lanceolata"],
  ["Euonymus, Euonymus"],
  ["Fat-headed Lizzie, Fatshedera lizei"],
  ["Ferns, Tracheophyta"],
  ["Figs, Creeping, Ficus pumila"],
  ["Figs, Fiddle Leaf, Ficus lyrata"],
  ["Figs, Weeping, Ficus benjamina"],
  ["Fingernail Plant, Neoregelia spectabilis"],
  ["Firecracker Plant, Russelia equisetiformis"],
  ["Flame of the Woods, Ixora coccinea"],
  ["Flaming Katy, Kalanchoe blossfeldiana"],
  ["Flowering Maple, Abutilon"],
  ["Friendship Plant, Pilea involucrata"],
  ["Fuchsia, Fuschia"],
  ["Gardenia, Gardenia"],
  ["Geranium, Pelargonium"],
  ["Glory Lily, Gloriosa superba"],
  ["Gloxinia, Sinningia speciosa"],
  ["Gold-Dust Plant, Aucuba japonica"],
  ["Grape Ivy, Cissus rhombifolia"],
  ["Hedera Ivy, Hedera helix"],
  ["Heliotrope, Heliotropium"],
  ["Hen-and-Chicken, Sempervivum tectorum"],
  ["Hibiscus, Hibiscus"],
  ["Hyacinth, Hyacinthus"],
  ["Inch Plant / Wandering Jew, Tradescantia zebrina"],
  ["Jacaranda, Jacaranda"],
  ["Jade Plant, Crassula ovata"],
  ["Jacobinia / Plume Flower, Justicia carnea"],
  ["Japanese Sedge, Carex morrowii"],
  ["Jasmine, Jasminum"], 
  ["Jelly Bean Plant, Sedum rubrotinctum"],
  ["Jerusalem Cherry, Solanum pseudocapsicum"],
  ["Jessamine, Cestrum"],
  ["Kalanchoe, Kalanchoe tomentosa"],
  ["Kaffir Lily, Clivia Miniata"],
  ["Kangaroo Thorn, Acacia paradoxa"],
  ["Kentia Palm, Howea forsteriana"],
  ["Lady Palm, Rhapis excelsa"],
  ["Lantana, Lantana"],
  ["Lipstick Vine, Aeschynanthus radicans"],
  ["Lucky Clover, Trifolium repens"],
  ["Maidenhair Fern, Adiantum"],
  ["Swiss Cheese plant, Monstera deliciosa"],
  ["Mosaic Plant, Fittonia albivenis"],
  ["Mosses-in-the-Cradle, Tradescantia spathacea"],
  ["Myrtle, Myrtus"],
  ["Narcissus, Narcissus"],
  ["Nasturtium, Tropaeolum"],
  ["Natal Plum, Carissa macrocarpa"],
  ["Nicodemia (Indoor Oak), Nicodemia (Indoor Oak)"],
  ["Nicotiana, Nicotiana"],
  ["Norfolk Island Pine, Araucaria heterophylla"],
  ["Oleander, Nerium oleander"],
  ["Orchid, Orchidaceae"],
  ["Painters Palette, Tovara virginiana"],
  ["Panda Plant, Kalanchoe tomentosa"],
  ["Parasol Plant, Firmiana simplex"],
  ["Parlour Palm, Chamaedorea elegans"],
  ["Passion Flower, Passiflora"],
  ["Peace Lily, Spathiphyllum wallisii"],
  ["Philodendron, Philodendron"],
  ["Piggyback Plant, Tolmiea menziesii"],
  ["Pygmy Date Palm, Phoenix roebelenii"],
  ["Piles (Aluminum Plant), Pilea cadierei"],
  ["Poinsettia, Euphorbia pulcherrima"],
  ["Polyscias, Polyscias"],
  ["Ponytail Palm, Beaucarnea recurvata"],
  ["Prayer Plant, Maranta leuconeura"],
  ["Primrose, Primula vulgaris"],
  ["Rabbit's Foot Fern, Phlebodium aureum"],
  ["Radiator Plant, Peperomia"],
  ["Rubber Plant, Ficus elastica"],
  ["Sensitive Plant, Mimosa pudica"],
  ["Sentry Palm, Howea belmoreana"], 
  ["Shrimp Plant, Justicia brandegeeana"],
  ["Siderasis, Siderasis"],
  ["Silk Oak, Grevillea robusta"],
  ["Snake Plant, Dracaena trifasciata"],
  ["Snakeskin Plant, Sansevierias trifasciata"],
  ["Spider Plant, Chlorophytum comosum"],
  ["Star-of-Bethleham, Ornithogalum"],
  ["Strawberry Geranium, Saxifraga stolonifera"],
  ["Sugar Almond Plant, Pachyphytum oviferum"],
  ["Swedish Ivy, Plectranthus verticillatus"],
  ["Sweet Flag, Acorus calamus"],
  ["Table Fern, P. cretica albolineata"],
  ["Temple Bells, Pieris japonica"],
  ["Umbrella Plant, Cyperus alternifolius"],
  ["Umbrella Tree, Schefflera actinophylla"],
  ["Vase Plant, Aechmea fasciata"],
  ["Velvet Plant, Gynura aurantiaca"],
  ["Veltheimia, Veltheimia"],
  ["Venus Flytrap, Dionaea muscipula"],
  ["Verbena, Verbena"],
  ["Violet Flame, Episcia cupreata"],
  ["Vriesia, Vriesia"],
  ["Wax Plant, Hoya carnosa"],
  ["Wood-Rose, Argyreia nervosa"],
  ["Yesterday-Today-and-Tomorrow, Brunfelsia pauciflora"],
  ["Zebra Plant, Aphelandra squarrosa"]
]

// Array of the plant's preferred moisture level and frequency based on the plant name 
let plant_moisture_frequency = [
  [3, 388800000],
  [7, 388800000],
  [1, 604800000],
  [3, 388800000],
  [8, 259200000],
  [4, 388800000],
  [4, 388800000],
  [6, 388800000],
  [8, 259200000],
  [4, 388800000],
  [6, 388800000],
  [6, 388800000],
  [6, 388800000],
  [7, 388800000],
  [3, 604800000],
  [6, 259200000],
  [7, 388800000],
  [4, 388800000],
  [7, 259200000],
  [7, 388800000],
  [6, 388800000],
  [6, 388800000],
  [8, 259200000],
  [3, 604800000],
  [7, 388800000],
  [3, 259200000],
  [4, 388800000],
  [8, 259200000],
  [7, 388800000],
  [1, 604800000],
  [7, 259200000],
  [7, 259200000],
  [7, 388800000],
  [1, 604800000],
  [1, 604800000],
  [3, 604800000],
  [4, 388800000],
  [1, 604800000],
  [1, 604800000],
  [6, 259200000],
  [4, 388800000],
  [6, 388800000],
  [7, 259200000],
  [6, 388800000],
  [4, 388800000],
  [1, 604800000],
  [7, 259200000],
  [7, 259200000],
  [6, 388800000],
  [7, 259200000],
  [6, 259200000],
  [7, 259200000],
  [7, 259200000],
  [7, 259200000],
  [7, 259200000],
  [7, 388800000],
  [3, 604800000],
  [1, 388800000],
  [6, 388800000],
  [7, 259200000],
  [4, 388800000],
  [1, 604800000],
  [7, 259200000],
  [1, 604800000],
  [4, 388800000],
  [1, 604800000],
  [7, 388800000],
  [1, 604800000],
  [4, 388800000],
  [6, 259200000],
  [7, 259200000],
  [1, 604800000],
  [4, 388800000],
  [7, 388800000],
  [7, 388800000],
  [7, 388800000],
  [1, 604800000],
  [7, 259200000],
  [6, 604800000],
  [7, 259200000],
  [8, 259200000],
  [1, 388800000],
  [4, 388800000],
  [7, 388800000],
  [1, 604800000],
  [4, 388800000],
  [6, 388800000],
  [7, 388800000],
  [1, 604800000],
  [4, 604800000],
  [8, 259200000],
  [1, 388800000],
  [6, 388800000],
  [1, 604800000],
  [7, 259200000],
  [7, 259200000],
  [7, 259200000], 
  [1, 604800000],
  [3, 388800000],
  [7, 259200000],
  [1, 604800000],
  [1, 604800000],
  [6, 388800000],
  [6, 388800000],
  [8, 388800000],
  [1, 604800000],
  [7, 388800000],
  [1, 604800000],
  [6, 259200000],
  [4, 388800000],
  [7, 388800000],
  [7, 388800000],
  [1, 604800000],
  [7, 388800000],
  [7, 388800000],
  [6, 388800000],
  [4, 604800000],
  [7, 388800000],
  [4, 388800000],
  [7, 388800000],
  [1, 388800000],
  [8, 388800000],
  [1, 604800000],
  [4, 604800000],
  [7, 388800000],
  [7, 259200000],
  [8, 259200000],
  [4, 604800000],
  [6, 388800000],
  [8, 259200000],
  [6, 388800000],
  [1, 604800000],
  [6, 388800000],
  [1, 604800000],
  [7, 388800000],
  [7, 388800000],
  [7, 388800000],
  [1, 388800000],
  [4, 604800000],
  [7, 259200000],
  [6, 388800000], 
  [1, 604800000],
  [1, 604800000],
  [4, 604800000],
  [1, 604800000],
  [4, 388800000],
  [7, 388800000],
  [7, 388800000],
  [1, 388800000],
  [1, 604800000],
  [4, 388800000],
  [8, 388800000],
  [8, 259200000],
  [7, 388800000],
  [10, 259200000],
  [1, 388800000],
  [7, 388800000],
  [7, 388800000],
  [7, 259200000],
  [10, 388800000],
  [1, 604800000],
  [7, 388800000],
  [1, 388800000],
  [4, 604800000],
  [6, 259200000],
  [6, 388800000],
  [7, 388800000]
]

// Set the dropdown list for plant names
var options = '';
for(var k = 0; k < plant_name_data.length; k++) {
  options += '<option value="'+plant_name_data[k]+'" />';
}
// Get the plant name from input
document.getElementById('pnames').innerHTML = options;

// Set the dropdown list for potting mix ratios
var options2 = '';
for(var k = 0; k < potting_mix_ratio_data.length; k++) {
  options2 += '<option value="'+potting_mix_ratio_data[k][0]+'" />';
}
// Get the potting mix ratio from input
document.getElementById('pratios').innerHTML = options2;

// Update all the output
function updateSetting() {
  // Change the water pump duration output parameter
  // Get the pot size from input
  var input_pot_size = document.getElementById("psize").value; 
  document.getElementById("water_pump").innerHTML = Math.round((1471.5*input_pot_size - 4854.8)/50/1.25*1000) + " ms";

  // Change the potting mix ratio's conductivity level when dry and wet output parameter
  var input_potting_ratio = document.getElementById("pratio").value;
  for(var i = 0; i < potting_mix_ratio_data.length; i++) {
    if(potting_mix_ratio_data[i][0] == input_potting_ratio) {
      document.getElementById("mix_dry").innerHTML = potting_mix_ratio_data[i][1];
      document.getElementById("mix_wet").innerHTML = potting_mix_ratio_data[i][2];
    }
  }
  
  // Change the plant moisture and frequency output parameter
  var input_plant_name = document.getElementById("pname").value; 
  for(var m = 0; m < plant_name_data.length; m++) {
    if(plant_name_data[m] == input_plant_name) {
      var plant_index = m;
      document.getElementById("plant_moisture").innerHTML = plant_moisture_frequency[m][0];
      document.getElementById("plant_freq").innerHTML = plant_moisture_frequency[m][1] + " ms";
    }
  }
  
}
