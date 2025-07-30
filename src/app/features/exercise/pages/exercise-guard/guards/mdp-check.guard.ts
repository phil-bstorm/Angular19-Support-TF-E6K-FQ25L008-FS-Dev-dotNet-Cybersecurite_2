import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { MotDePasseService } from '../services/mot-de-passe.service';
import { inject } from '@angular/core';

export const mdpCheckGuard: CanActivateFn = (route, state) => {
  const mdpService : MotDePasseService = inject(MotDePasseService);
  const router : Router = inject(Router);

  if(mdpService.mdp == 'Test1234=')
    return true;
  let newroute : string[] = route.pathFromRoot.filter(ar => ar.url.length > 0).map(ar => ar.url[0].path);
  newroute[newroute.length-1] = 'mauvais-mdp';
  router.navigate(['/', ...newroute]);
  //router.navigateByUrl('/exercise/14/mauvais-mdp');
  return false;
};
