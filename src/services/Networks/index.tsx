import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { INetwork } from './network.type';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
import { store } from 'pages/index';

export class NetworkService {

  //Create network
  public static new(data: INetwork, token: string): Observable<any> {

      //save the ajax object that can be .pipe by the observable
      const networkWithHeaders$ = ajax({

          url: baseUrl+"/networks/new",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            "Authorization": "Bearer " + token,
          },
          body: {

            "name": data.name,
            "url": data.url,
            "avatar": data.avatar,
            "description": data.description,
            "privacy": data.privacy,
            "place": data.place,
            "geoPlace": JSON.parse(data.geoPlace),

          },
      });

    return networkWithHeaders$;

  }

  //Edit network
  public static edit(data: INetwork, user: IUser): Observable<any> {

      //save the ajax object that can be .pipe by the observable
      const networkWithHeaders$ = ajax({

          url: baseUrl+"/networks/edit/"+id,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
          },
          body: {

            "name": data.name,
            "id": data.id,
            "url": data.url,
            "avatar": data.avatar,
            "description": data.description,
            "privacy": data.privacy,
            "place": data.place,
            "geoPlace": data.geoPlace,
            "radius": data.radius,
            "tags": data.tags,
            "owner": user.id,
            "friendNetworks": data.friendNetworks,

          },

      });

    return networkWithHeaders$;

  }

  //Get networks
  public static find(): Observable<any> {

      //save the ajax object that can be .pipe by the observable
      const networkWithHeaders$ = ajax({

          url: baseUrl+"/networks/find",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
          },
          body: {

          },
      });

    return networkWithHeaders$;

  }

  //Map networks
  public static map(data: INetwork): Observable<any> {

      //save the ajax object that can be .pipe by the observable
      const networkWithHeaders$ = ajax({

          url: baseUrl+"/networks/map",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
          },
          body: {

            "id" : id,

          },
      });

    return networkWithHeaders$;

  }

  //Get network by id
  public static findById(id: string): Observable<any> {

      //save the ajax object that can be .pipe by the observable
      const networkWithHeaders$ = ajax({

          url: baseUrl+"/networks/findById/"+id,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
          },
          body: {

            "id":id,

          },
      });

    return networkWithHeaders$;

  }


  //Delete network
  public static _delete(id: any): Observable<any> {

      //save the ajax object that can be .pipe by the observable
      const networkWithHeaders$ = ajax({

          url: baseUrl+"/networks/delete/"+id,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
          },
          body: {

            "id":id,

          },
      });

    return networkWithHeaders$;

  }

  //Delete all networks
  public static deleteAll(id: any): Observable<any> {

      //save the ajax object that can be .pipe by the observable
      const networkWithHeaders$ = ajax({

          url: baseUrl+"/networks",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
          },
          body: {

            "id":id,

          },
      });

    return networkWithHeaders$;

  }



}
