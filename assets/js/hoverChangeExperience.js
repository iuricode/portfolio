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
    document.querySelector(nameCard).classList.toggle("activeExperience");
  });
}
