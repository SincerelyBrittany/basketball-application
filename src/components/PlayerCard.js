const PlayerCard = ({ player, team }) => {
    let teamImage = team.logo
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:w-2/3">
                    <img class="h-48 w-full object-cover md:h-200 md:w-300" src={player.headshot} alt="placeholder image" />
                </div>
                <div class="p-6 md:w-2/3 text-center">
                    <img src={teamImage} alt="team-image" class="ml-20 mb-4 shadow-lg rounded-full max-w-full h-10 align-middle border-none" />
                    <p>#{player.num} | {player.pos} </p>
                    <p>{player.fn} {player.ln}</p>
                    <p class="mt-2 text-gray-600"></p>
                </div>
            </div>
            <div class="border-t-4 border-indigo-500 grid grid-cols-3 gap-1 text-center ">
                <div class="rounded-md p-2">
                    <p>PPG </p>
                    <p>
                        {player.pts}
                    </p>
                </div>
                <div class=" rounded-md p-2">
                    <p>RPG </p>
                    <p>{player.reb}</p></div>
                <div class=" rounded-md p-2">
                    <p>APG </p>
                    <p> {player.ast}</p>
                </div>
            </div>
        </div>


    );
};

export default PlayerCard;