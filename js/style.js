var videoMechanics = document.getElementById("videoMechanicsId");

function OnExplorationButtonClick()
{
    videoMechanics.setAttribute("src", "videos/Exploracion_Desyncropath_Recortado.mp4")
}

function OnCombatButtonClick()
{
    videoMechanics.setAttribute("src", "videos/Combate_Desyncro_Recortado.mp4")
}

function OnDownloadLinkClicked()
{
  var link = document.createElement("a");
  link.href = "downloads/GameSetup/Desyncropath_WindowsSetup_(x64).exe";
  link.download = "Desyncropath_WindowsSetup_(x64).exe"

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function OnGithubDownloadLinkClicked()
{
  window.open("https://github.com/KbaxStudio/Desyncropath-Setup?tab=readme-ov-file", "_blank");
}

function OnInstagramDownloadLinkClicked()
{
  window.open("https://www.instagram.com/kbaxstudio/", "_blank");
}

function OnItchioDownloadLinkClicked()
{
  window.open("https://kbaxstudio.itch.io/desyncropath", "_blank");
}

document.addEventListener('DOMContentLoaded', function(){
    // SPLIDE
    var splide = new Splide('.splide', {
      padding: '10vw',
      wheel: false,
      type: 'loop',
      autoplay: true,
      autoScroll: {
          speed: 1,
      },
  });
  splide.mount(window.splide.Extensions);
});