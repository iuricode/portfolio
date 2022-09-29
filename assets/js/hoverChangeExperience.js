export function hoverChangeExperience(
  nameCard,
  changeDescription,
  titleExperience,
  companyExperience,
  dateExperience
) {
  const varChangeDescription = document.querySelector(".changeExperience");
  const varTitleExperience = document.querySelector(".titleExperience");
  const varCompanyExperience = document.querySelector(".companyExperience");
  const varDateExperience = document.querySelector(".dateExperience");

  document.querySelector(nameCard).addEventListener("click", () => {
    varChangeDescription.innerHTML = changeDescription;
    varCompanyExperience.innerHTML = companyExperience;
    varTitleExperience.innerHTML = titleExperience;
    varDateExperience.innerHTML = dateExperience;
  });
}

const header = document.getElementById("experience-company");
const btns = header.getElementsByClassName("company");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("activeExperience");
    current[0].className = current[0].className.replace(
      " activeExperience",
      ""
    );
    this.className += " activeExperience";
  });
}
