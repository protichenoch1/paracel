const roles = {
  'Product Designer': { company: 'Miro · Amsterdam, Netherlands', requirements: ['3+ years designing digital products', 'Portfolio showing end-to-end product work', 'Fluent written and spoken English'] },
  'Senior Frontend Engineer': { company: 'Zalando · Berlin, Germany', requirements: ['5+ years building web applications', 'Strong JavaScript, TypeScript, and React skills', 'Experience working in cross-functional teams'] },
  'Growth Marketing Lead': { company: 'Notion · Toronto, Canada', requirements: ['5+ years in growth or lifecycle marketing', 'Experience planning measurable campaigns', 'Clear written communication skills'] },
  'People Operations Partner': { company: 'Canva · Sydney, Australia', requirements: ['4+ years in people operations or HR', 'Experience supporting global teams', 'Strong stakeholder management skills'] },
  'Platform Engineer': { company: 'Wise · Singapore', requirements: ['3+ years in infrastructure or platform engineering', 'Experience with cloud systems and automation', 'Collaborative problem-solving approach'] }
};
const select = document.getElementById('role');
const requestedRole = new URLSearchParams(location.search).get('job');
Object.keys(roles).forEach(role => select.add(new Option(role, role)));
select.value = roles[requestedRole] ? requestedRole : 'Product Designer';
function showRole() { const role = roles[select.value]; document.getElementById('roleDetails').innerHTML = `<h3>${select.value}</h3><p>${role.company}</p><h4>ROLE REQUIREMENTS</h4><ul>${role.requirements.map(item => `<li>${item}</li>`).join('')}</ul>`; }
select.addEventListener('change', showRole); showRole();
document.getElementById('applicationForm').addEventListener('submit', event => { event.preventDefault(); document.getElementById('successMessage').style.display = 'block'; event.target.querySelector('button').disabled = true; event.target.querySelector('button').textContent = 'Application submitted'; });
